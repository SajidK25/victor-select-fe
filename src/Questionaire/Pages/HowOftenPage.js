/* eslint-disable import/order */
import React from 'react'
import { Field } from 'react-final-form'
import { EdSelectionDetail } from '../../_components/EdSelectionDetail'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { EdPriceOption } from '../../_components/EdPriceOption'
import { StandardForm } from '../../_components/StandardForm'
import { Transition } from '../../_components/Transition'
import { getPrices } from '../../_constants'
import { formatMoney } from '../../_constants/drugSelections'

const useStyles = makeStyles(theme => ({
  description: {
    marginTop: 16,
    padding: 16
  },
  container: {
    margin: 0,
    padding: 0
  },
  title: {
    fontSize: 28,
    fontWeight: 500,
    marginBottom: 24
  },
  root: {
    margin: 0
  },
  controlRoot: {
    margin: 0,
    width: '100%',
    verticalAlign: 'top'
  },
  labelRoot: {
    width: '100%'
  },
  subHead: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(1.5)
  },
  hidden: {
    display: 'none'
  },
  outer: {
    display: 'flex',
    minHeight: '100%',
    padding: '0 !important',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  main: {
    flexShrink: 0,
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingBottom: 40
    }
  },
  innerMain: {
    marginLeft: 20,
    padding: '10px 0 60px',
    width: '100%',
    maxWidth: 400,
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      padding: '0 24px',
      width: '100%',
      maxWidth: 'unset'
    }
  },
  photo: {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '40%',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  pricingGroup: {
    display: 'flex',
    margin: 0,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  pricingBox: {
    flexShrink: 0,
    paddingBottom: 0,
    paddingTop: 15
  },
  priceItem: {
    flexShrink: 0,
    width: '33.3%',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  image: {
    margin: '75px 33px',
    maxWidth: '100%',
    width: 175,
    display: 'block',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      margin: '10px auto 15px',
      maxWidth: 175
    }
  }
}))

const validateHowOften = values => {
  const errors = {}

  return errors
}

const PriceRadio = props => {
  const { input, id, options, LabelDisplay } = props
  const classes = useStyles()
  console.log(props)

  if (options.totalPrice < 50) return null

  return (
    <div className={classes.priceItem}>
      <FormControlLabel
        classes={{
          root: classes.controlRoot,
          label: classes.labelRoot
        }}
        label={<LabelDisplay options={options} checked={input.value === id} />}
        value={id}
        onChange={input.onChange}
        checked={input.value === { id }}
        control={
          <Radio
            name={input.name}
            classes={{
              root: classes.hidden,
              checked: classes.checked
            }}
            type="radio"
          />
        }
      />
    </div>
  )
}

const PricingGroup = props => {
  const {
    input,
    meta: { touched, error },
    pricing
  } = props
  const classes = useStyles()

  return (
    <div className={classes.pricingGroup}>
      <PriceRadio
        input={input}
        LabelDisplay={EdPriceOption}
        options={{
          pricing: pricing.sixMonth,
          totalPrice: pricing.sixMonth * 6,
          title: 'Ship every 6 months',
          subTitle: `Billed ${formatMoney(
            pricing.sixTotal
          )} every six months. Cancel anytime.`,
          savings: (pricing.monthly - pricing.sixMonth) * 12
        }}
        id="everySix"
      />
      <PriceRadio
        input={input}
        LabelDisplay={EdPriceOption}
        options={{
          pricing: pricing.threeMonth,
          totalPrice: pricing.threeMonth * 3,
          title: 'Ship every 3 months',
          subTitle: `Billed ${formatMoney(
            pricing.threeTotal,
            0
          )} every three months. Cancel anytime.`,
          savings: (pricing.monthly - pricing.threeMonth) * 12
        }}
        id="everyThree"
      />
      <PriceRadio
        input={input}
        LabelDisplay={EdPriceOption}
        options={{
          pricing: pricing.monthly,
          totalPrice: pricing.monthly,
          title: 'Ship monthly',
          subTitle: `Pay Full Price.`,
          savings: 0
        }}
        id="monthly"
      />
    </div>
  )
}

const HowOftenPage = props => {
  const { values, direction, handleSubmit, ...rest } = props

  const classes = useStyles()

  const pricing = getPrices(values.subscription)

  return (
    <Transition direction={direction}>
      <div className={classes.outer}>
        <div className={classes.photo}>
          <img
            className={classes.image}
            src="https://res.cloudinary.com/bakerman59/image/upload/v1560876136/victory-select/victory_bottle_n6koc8.png"
            alt="bottle"
          />
        </div>
        <div className={classes.main}>
          <div className={classes.innerMain}>
            <StandardForm handleSubmit={handleSubmit}>
              <div className={classes.pricingBox}>
                <Typography className={classes.title}>
                  {pricing.display}
                </Typography>
                <Field
                  component={PricingGroup}
                  pricing={pricing}
                  name="subscription.shippingInterval"
                  type="div"
                />
                <EdSelectionDetail
                  pricing={pricing}
                  value={values.subscription.shippingInterval}
                  key={values.subscription.shippingInterval}
                />
              </div>
            </StandardForm>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export { HowOftenPage, validateHowOften }
