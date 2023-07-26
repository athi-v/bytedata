import axios from "axios"



//GET: Covid World Data
//Data Will Be Used For Dashboard
const covidGet = async () => {
    const response = await axios.get("https://disease.sh/v3/covid-19/all")
    return response.data
}

//GET: Covid History Data
//Data Will Be Used For Graphs
const covidHistory = async () => {
    const response = await axios.get('https://disease.sh/v3/covid-19/historical/all')
    return response.data
}

const covidService = {
covidGet, covidHistory
}

export default covidService