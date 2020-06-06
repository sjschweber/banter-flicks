export const NEXT = "NEXT";


export function next(){
  return {
    type: NEXT
  }
}

export function incrementAsync() {
  return (dispatch) => {
    setTimeout( () => {
      dispatch( next() )
    }, 5000 );
  }
}
