require('dotenv').config();
const axios = require('axios');

// Define the base currency and target currency
const BASE_CURRENCY = 'USD'; // You can change this
const TARGET_CURRENCY = 'EUR'; // You can change this

// Function to get the exchange rate from the API
const getExchangeRate = async (baseCurrency, targetCurrency) => {
    try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API_KEY}/latest/${baseCurrency}`);
        
        // Extract the exchange rate
        const rate = response.data.conversion_rates[targetCurrency];
        if (!rate) {
            throw new Error('Exchange rate not available for the target currency.');
        }
        return rate;
    } catch (error) {
        console.error('Error fetching exchange rate:', error.message);
    }
};

// Function to perform the conversion
const convertCurrency = async (amount) => {
    const rate = await getExchangeRate(BASE_CURRENCY, TARGET_CURRENCY);
    if (rate) {
        const convertedAmount = amount * rate;
        console.log(`${amount} ${BASE_CURRENCY} = ${convertedAmount.toFixed(2)} ${TARGET_CURRENCY}`);
    }
};

// Example: Convert 100 USD to EUR
convertCurrency(100);