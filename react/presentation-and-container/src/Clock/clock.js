import React, { Component } from 'react'
import PropTypes from 'prop-types'

Clock.propTypes = {
    hours:PropTypes.number.isRequired,
    minutes:PropTypes.number.isRequired,
    seconds:PropTypes.number.isRequired,
  }
export default function Clock(props) {
  var[hours,minutes,seconds] = [props.hours,props.minutes,props.seconds].map(num => num <10? '0'+ num:num);
  return <h1>{hours}:{minutes}:{seconds}</h1>
}




