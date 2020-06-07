import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Form } from "react-final-form";
import { FORM_ERROR } from "final-form";

import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  SAVENEWSUPPLEMENT_MUTATION,
  REGISTER_MUTATION,
  SAVE_ADDRESS,
  ME_QUERY,
} from "../Graphql";
import { setAccessToken } from "../accessToken";
import { getProduct } from "./data";
import { Layout } from "./components/Layout/Layout";
import { Spinner, ErrorMessage, ErrorDisplay } from "../_components";
import {
  ProductPage,
  validateProduct,
  CheckoutPage,
  validateCheckout,
  AccountPage,
  validateAccount,
} from "./Shared";
import { initialProductValues } from "./data";

const Product = () => {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();

  const product = getProduct(id);
  initialProductValues.subscription.drugId = id.toUpperCase();

  const [register, { error: registerError }] = useMutation(REGISTER_MUTATION);
  const [saveAddress, { error: saveAddressError }] = useMutation(SAVE_ADDRESS);

  const [saveNewVisit, { error: saveError }] = useMutation(
    SAVENEWSUPPLEMENT_MUTATION
  );

  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const pathArray = location.pathname.split("/");
    if (pathArray.length > 3) {
      setCurrentPage(pathArray[3]);
    } else {
      setCurrentPage("product");
    }
  }, [location.pathname]);

  const registerAccount = async (values) => {
    const input = {
      email: values.email,
      password: values.password,
      firstName: values.personal.firstName,
      lastName: values.personal.lastName,
    };
    try {
      const response = await register({
        variables: { input },
        update: (store, { data }) => {
          if (!data) {
            return null;
          }
          if (data.register.message !== "EXISTS") {
            data.register.user.role = "VISITOR";
            store.writeQuery({
              query: ME_QUERY,
              data: {
                me: data.register.user,
              },
            });
          }
        },
      });
      if (response && response.data) {
        if (response.data.register.message !== "EXISTS") {
          setAccessToken(response.data.register.accessToken);
          history.push(`/product/${id}/checkout`);
        } else {
          history.push(`/product/${id}/login`);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const next = () => {
    let nextPage = "";
    if (currentPage === "product") nextPage = "account";
    if (currentPage === "account") nextPage = "checkout";
    setCurrentPage(nextPage);
    history.push(`/product/${id}/${nextPage}`);
  };

  const previous = () => {
    let prevPage = "";
    if (currentPage === "checkout") prevPage = "account";
    if (currentPage === "account") prevPage = "product";
    setCurrentPage(prevPage);
    if (prevPage === "product") history.push(`/product/${id}`);
    else history.push(`/product/${id}/${prevPage}`);
  };

  const isLastPage = () => {
    return currentPage === "checkout";
  };

  const validate = async (values) => {
    if (currentPage === "product") return await validateProduct(values);
    if (currentPage === "account") return await validateAccount(values);
    if (currentPage === "checkout") return await validateCheckout(values);

    return {};
  };

  if (!product) return <Layout>Ooops. Product {id} not found.</Layout>;

  return (
    <Form
      initialValues={initialProductValues}
      validate={validate}
      onSubmit={async (values) => {
        let response = null;
        try {
          if (currentPage === "account") {
            await registerAccount(values);
          } else if (!isLastPage()) {
            next();
          } else {
            response = await saveAddress({
              variables: {
                input: {
                  addressOne: values.personal.addressOne,
                  addressTwo: values.personal.addressTwo,
                  city: values.personal.city,
                  state: values.personal.state,
                  zipcode: values.personal.zipCode,
                  telephone: values.personal.telephone,
                },
              },
            });
            if (response && response.data) {
              if (response.data.saveAddress.message != "OK") {
                return { [FORM_ERROR]: "Unable to verify your address." };
              }
            }
            response = await saveNewVisit({
              variables: {
                input: values,
              },
            });
            console.log("SaveProduct:", response);
            if (response && response.data) {
              if (response.data.saveNewSupplement.message !== "OK") {
                return {
                  [FORM_ERROR]: "Unable to verify your card information.",
                };
              }
              console.log("response", response);
              history.push("/thankyou");
            }
          }
        } catch (err) {
          console.log(err);
        }
      }}
    >
      {({ handleSubmit, values, submitting, submitError }) => {
        return (
          <Layout handleClick={previous}>
            {submitting && <Spinner />}
            {submitError && <ErrorDisplay errorText={submitError} />}
            <ErrorMessage error={registerError} />
            <ErrorMessage error={saveAddressError} />
            <ErrorMessage error={saveError} />
            <form onSubmit={handleSubmit}>
              <Switch location={location}>
                <Route path={`/product/${id}`} exact>
                  <ProductPage product={product} />
                </Route>
                <Route path={`/product/${id}/account`} exact>
                  <AccountPage />
                </Route>
                <Route path={`/product/${id}/checkout`} exact>
                  <CheckoutPage values={values} product={product} />
                </Route>
              </Switch>
            </form>
          </Layout>
        );
      }}
    </Form>
  );
};

export { Product };
