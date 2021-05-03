<template>
    <div class="container">
        <div class="form-group">
            <select v-model="selectedCountry" class="form-control" @change="getDataByCountry">
              <option value="">Global</option>
              <option v-for="country in countries" :key="country.Slug" :value="country.Slug"> {{country.Country}} </option>
            </select>

        </div>
        <div>
            <div class="row justify-content-around">
                <div class="col-md-4">
                    <div class="stats-item btn-info">
                        <span class="item-title">Confirmed</span>
                        <span class="item-count"> {{confirmed | numberFormat }} </span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="stats-item btn-danger">
                        <span class="item-title">Deaths</span>
                        <span class="item-count"> {{deaths | numberFormat}} </span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="stats-item btn-success">
                        <span class="item-title">Recovered</span>
                        <span class="item-count"> {{recovered | numberFormat}} </span>
                    </div>
                </div>
            </div>
            <hr>

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Country</th>
                  <th scope="col">Confirmed</th>
                  <th scope="col">Deaths</th>
                  <th scope="col">Recovered</th>
                  <th scope="col">New Confirmed</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data.Countries" :key="index">
                  <th scope="row"> {{index}} </th>
                  <td> {{item.Country}} </td>
                  <td> {{item.TotalConfirmed   | numberFormat}} </td>
                  <td> {{item.TotalDeaths   | numberFormat}} </td>
                  <td> {{item.TotalRecovered   | numberFormat}} </td>
                  <td> {{item.NewConfirmed   | numberFormat}} </td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      selectedCountry: '',
      countries: {},
      data: {},
      confirmed: 0,
      deaths: 0,
      recovered: 0,
      newConfirmed: 0
    }
  },
  filters: {
    numberFormat (number) {
      return number.toLocaleString()
    }
  },
  methods: {
    getCountries () {
      axios.get('https://api.covid19api.com/countries')
        .then(res => {
          this.countries = res.data
        })
    },
    getSummaryData () {
      axios.get('https://api.covid19api.com/summary')
        .then(res => {
          const data = res.data
          this.data = data
          this.confirmed = data.Global.TotalConfirmed
          this.deaths = data.Global.TotalDeaths
          this.recovered = data.Global.TotalRecovered
        })
    },
    getDataByCountry () {
      let data = this.data.Countries.filter(country => {
        return country.Slug === this.selectedCountry
      })
      data = data[0]
      this.confirmed = data.TotalConfirmed
      this.deaths = data.TotalDeaths
      this.recovered = data.TotalRecovered
      this.newConfirmed = data.NewConfirmed
    }

  },
  mounted () {
    this.getCountries()
    this.getSummaryData()
  }
}
</script>

<style>
    body {
        background: antiquewhite;
    }
    table {
        background: #fff;
    }
    .container {
        margin-top: 40px;
    }
    .stats-item {
        padding: 20px;
        text-align: center;
        margin-bottom: 20px;
    }
    .item-title {
        display: block;
        color: #fff;
        font-size: 17px;
    }
    .item-count {
        font-weight: bold;
        font-size: 30px;
    }
</style>
