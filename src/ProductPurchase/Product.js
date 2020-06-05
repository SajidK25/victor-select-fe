import React, { useState, useEffect } from "react";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { Form } from "react-final-form";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
//import { getNextPage, getCurrentPage } from "./questionPaths";
import { SAVENEWVISIT_MUTATION, UPDATECURRVISIT_MUTATION } from "../Graphql";
import { getProduct } from "./data";
import { Layout } from "./components/Layout/Layout";
import { ProductPage } from "./Shared";

const Product = () => {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const client = useApolloClient();

  const [saveNewVisit, { error: saveError }] = useMutation(
    SAVENEWVISIT_MUTATION
  );
  const [updateCurrVisit] = useMutation(UPDATECURRVISIT_MUTATION);

  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const pathArray = location.pathname.split("/");
  }, [location]);

  const next = (values) => {
    //    const nextPage = getNextPage(values, pageIndex, 1);
    //    setPageIndex(nextPage.pageIndex);
    //    history.push(nextPage.path);
  };

  const previous = (values) => {
    //   const prevPage = getNextPage(values, pageIndex, -1);
    //   setPageIndex(prevPage.pageIndex);
    //   history.push(prevPage.path);
  };

  const isLastPage = () => {
    return pageIndex === 1;
  };

  const validate = async (values) => {
    //    return page.validate ? page.validate(values, client) : {};
  };

  const product = getProduct(id);

  if (!product) return <Layout>Ooops. Product {id} not found.</Layout>;

  return (
    <Layout>
      <Form
        initialValues={{}}
        validate={validate}
        onSubmit={async (values) => {
          let response = null;
          try {
            if (!isLastPage()) {
              response = await updateCurrVisit({
                variables: {
                  input: values,
                },
              });
              if (response && response.data) {
                await next(values);
              }
            } else {
              response = await saveNewVisit({
                variables: {
                  input: values,
                },
              });
              if (response && response.data) {
                history.push("/confirmation");
              }
            }
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ handleSubmit, values, validating, submitting, submitError }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Switch location={location}>
                <Route path={`/product/${id}`} exact>
                  <ProductPage product={product} />
                </Route>
              </Switch>
            </form>
          );
        }}
      </Form>
    </Layout>
  );
};

export { Product };
