export const MAX_AMOUNT = 50

export const drugIds = {
  EROS: 'EROS',
  ROMEO: 'ROMEO',
  TADALAFIL: 'TADALAFIL',
  SILDENAFIL: 'SILDENAFIL',
  TADALAFIL_DAILY: 'TADALAFIL_DAILY',
  MALE_DAILY: 'MALE_DAILY',
  NO_ADDON: 'NO_ADDON'
}

export const drugSelections = [
  {
    id: drugIds.EROS,
    category: 'B',
    labelOptions: {
      label: 'EROS',
      description: `Eros is a cutting edge formulation unlike any other medication currently available anywhere 
                    for the treatment of Erectile Dysfunction. 
                    Prescription strength Tadalafil (Cialis) and Apomorphine
                    are combined to create a super drug with a duration 
                    of action up to 42 hours.`,
      price: 18.75
    },
    doseOptions: [
      {
        id: '',
        default: true,
        labelOptions: {
          label: '',
          subTile: '',
          display: 'EROS'
        },
        pricing: {
          sixMonth: 15,
          threeMonth: 16.5,
          monthly: 18.75
        }
      }
    ]
  },
  {
    id: drugIds.TADALAFIL_DAILY,
    category: 'C',
    labelOptions: {
      label: 'Tadalafil Daily',
      description: '',
      price: 3.75
    },
    doseOptions: [
      {
        id: '',
        default: true,
        labelOptions: {
          title: '5mg',
          subTile: '',
          display: 'Tadalafil Daily'
        },
        pricing: {
          sixMonth: 3,
          threeMonth: 3.25,
          monthly: 3.75
        }
      }
    ]
  },
  {
    id: drugIds.MALE_DAILY,
    category: 'C',
    labelOptions: {
      label: 'Male Daily',
      description: '',
      price: 2.5
    },
    doseOptions: [
      {
        id: '',
        default: true,
        labelOptions: {
          title: '',
          subTile: '',
          display: 'Male Daily'
        },
        pricing: {
          sixMonth: 2,
          threeMonth: 2.25,
          monthly: 2.5
        }
      }
    ]
  },
  {
    id: drugIds.TADALAFIL,
    category: 'B',
    labelOptions: {
      label: 'Tadalafil',
      description: 'Generic form of Cialis used to treat Erectile Dysfunction',
      price: 15
    },
    doseOptions: [
      {
        id: '20',
        default: true,
        labelOptions: {
          label: '20mg',
          subTitle:
            'A starting dose of 20mg is most common for people who are new to medication.',
          display: 'Tadalafil 20mg'
        },
        pricing: {
          sixMonth: 12,
          threeMonth: 13.25,
          monthly: 15
        }
      },
      {
        id: '10',
        default: false,
        labelOptions: {
          label: '10mg',
          subTitle: '',
          display: 'Tadalafil 10mg'
        },
        pricing: {
          sixMonth: 6,
          threeMonth: 6.5,
          monthly: 7.5
        }
      }
    ]
  },
  {
    id: drugIds.ROMEO,
    category: 'A',
    labelOptions: {
      label: 'ROMEO',
      description: `Romeo is a combination product utilizing prescription 
                    strength Sildenafil (Viagra) as the primary component 
                    in conjunction with Apomorphine. Romeo is enhanced to 
                    be more effective than Viagra alone with a duration of 
                    action up to 6 hours.`,
      price: 10
    },
    doseOptions: [
      {
        id: '',
        default: true,
        labelOptions: {
          label: '',
          subTile: '',
          display: 'ROMEO'
        },
        pricing: {
          sixMonth: 8,
          threeMonth: 8.75,
          monthly: 10
        }
      }
    ]
  },
  {
    id: drugIds.SILDENAFIL,
    category: 'A',
    labelOptions: {
      label: 'Sildenafil',
      description: 'Generic form of Viagra used to treat Erectile Dysfunction',
      price: 8.75
    },
    doseOptions: [
      {
        id: '50',
        default: true,
        labelOptions: {
          label: '50mg',
          subTitle:
            'A starting dose of 50mg is most common for people who are new to medication.',
          display: 'Sildenafil 50mg'
        },
        pricing: {
          sixMonth: 7,
          threeMonth: 7.75,
          monthly: 8.75
        }
      },
      {
        id: '25',
        default: false,
        labelOptions: {
          label: '25mg',
          subTitle: '',
          display: 'Sildenafil 25mg'
        },
        pricing: {
          sixMonth: 4,
          threeMonth: 4.5,
          monthly: 5
        }
      }
    ]
  }
]

const addOns = [
  {
    id: drugIds.MALE_DAILY,
    category: '',
    labelOptions: {
      label: 'Male Daily',
      description: 'Yes! I want this supplement to enhance my results!',
      price: 1.75
    },
    pricing: {
      sixMonth: 1.25,
      threeMonth: 1.5,
      monthly: 1.75
    }
  },
  {
    id: drugIds.NO_ADDON,
    category: '',
    labelOptions: {
      label: 'No Addon',
      description: "No thanks! I don't want to supercharge my treatment.",
      price: 0
    },
    pricing: {
      sixMonth: 0,
      threeMonth: 0,
      monthly: 0
    }
  }
]

export const getAddonList = category => {
  return addOns
}

export const getDrugList = category => {
  return drugSelections.filter(d => d.category === category)
}

const getDrug = drugId => {
  let drug = drugSelections.find(d => d.id === drugId)

  return drug
}

export const getDrugName = drugId => {
  const drug = getDrug(drugId)

  return drug ? drug.labelOptions.label : ''
}

export const getDoseOptions = drugId => {
  const drug = getDrug(drugId)
  if (!drug) return null

  return drug.doseOptions
}

const getDoseOption = (drugId, dose) => {
  const options = getDoseOptions(drugId)
  console.log('getDoseOption:id', drugId)
  console.log('getDoseOption:dose', dose)

  if (!options) return null

  return options.find(o => o.id === dose)
}

export const validDoseOption = (drugId, dose) => {
  const option = getDoseOption(drugId, dose)
  if (!option) return false

  return true
}

export const defaultDose = drugId => {
  const options = getDoseOptions(drugId)
  if (!options) return ''

  const opt = options.find(o => o.default === true)
  if (!opt) return ''

  return opt.id
}

export const getPrices = (drugId, dose, count) => {
  const pricing = {
    display: `${drugId} not found`,
    monthly: 0,
    monthlyDoses: 0,
    threeMonth: 0,
    threeTotal: 0,
    threeDoses: 0,
    sixMonth: 0,
    sixTotal: 0,
    sixDoses: 0
  }

  const doseOption = getDoseOption(drugId, dose)
  if (!doseOption) return pricing

  pricing.display = doseOption.labelOptions.display
  pricing.monthly = doseOption.pricing.monthly * count
  pricing.monthlyDoses = count
  pricing.threeMonth = doseOption.pricing.threeMonth * count
  pricing.threeTotal = pricing.threeMonth * 3
  pricing.threeDoses = count * 3
  pricing.sixMonth = doseOption.pricing.sixMonth * count
  pricing.sixTotal = pricing.sixMonth * 6
  pricing.sixDoses = count * 6

  return pricing
}

export const drugDisplaySetup = subscription => {
  const pricing = getPrices(
    subscription.drugId,
    subscription.doseOption,
    subscription.timesPerMonth
  )
  const options = {
    display: '',
    monthlyDoses: 0,
    title: '',
    total: 0,
    doses: 0,
    per: '',
    interval: '',
    noDiscount: 0
  }

  options.display = pricing.display
  options.monthlyDoses = pricing.monthlyDoses

  switch (subscription.shippingInterval) {
    case 'everySix':
      options.title = '6 Month Delivery'
      options.total = pricing.sixTotal
      options.doses = pricing.monthlyDoses * 6
      options.per = '6 mo'
      options.interval = 'every 6 months'
      options.noDiscount = pricing.monthly * 6
      break

    case 'everyThree':
      options.title = '3 Month Delivery'
      options.total = pricing.threeTotal
      options.doses = pricing.monthlyDoses * 3
      options.per = '3 mo'
      options.interval = 'every 3 months'
      options.noDiscount = pricing.monthly * 3
      break

    case 'monthly':
      options.title = 'Monthly Delivery'
      options.total = pricing.monthly
      options.doses = pricing.monthlyDoses
      options.per = 'mo'
      options.interval = 'monthly'
      options.noDiscount = 0
      break

    default:
  }
  return options
}
