import Vue from 'vue'
import moment from "moment"
export default ()=>{
    Vue.filter('formatDate', function(value) {
        if (value) {
          return moment(String(value)).format('MM/DD/YYYY hh:mm')
        }
    })

    Vue.filter('displayPercent', function(value) {
        if (value) {
          return Math.floor(value * 100).toFixed(0) + "%"
        }
        return "0%"
    })

     Vue.filter('lastWord', function(value) {
        if (value) {
          let words = value.split(" ")
          return words[words.length - 1]
        }
        return ""
    })
    
}