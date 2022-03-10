// Right now we don't have getInterview selector function, so we'll need to implement it! This function will return an object that contains the interview data if it is passed an object that contains an interviewer.

export function getInterview(state,interview) {
  if (interview) {
    const stateUpdated = {...interview, interviewer:state.interviewers[interview.interviewer]}//not right?
    console.log("state.interviewer:---->",state.interviewers)
    console.log("interviewer:---->",interview)

    return stateUpdated
  } else {
    return null
  }
}


export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter( mappedDay => mappedDay.name === day);
  if (!filteredDays.length) { return []; }
  const appointmentArray = [];
  for (let item in filteredDays[0].appointments){

    appointmentArray.push(state.appointments[filteredDays[0].appointments[item]])
  }
return appointmentArray
}





export  function getInterviewersForDay(state, day) {
  if (!state.interviewers) return [];
  const filteredDay = state.days.filter( mappedDay => mappedDay.name === day)[0];

  if (!filteredDay) return [];

  if (!filteredDay.interviewers) return [];

  const result =  Object.values(state.interviewers).filter( interviewer => filteredDay.interviewers.includes(interviewer.id))
  console.log("result",result)
  return result;
}