const routes = {
  SEKOLAH() { return `/`; },
  LIST_ORDER_MANAGEMENT() { return `/list-order-management` },
  DEVELOPER(param) { return `/developer/${param}`; }
};

export default routes;