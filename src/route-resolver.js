export function authRouteResolver(getState) {
  return (nextState, replaceState) => {
    const { auth } = getState();
    const { pathname } = nextState.location;
  };
}
