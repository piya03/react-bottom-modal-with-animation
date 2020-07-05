function App() {
  const [show, setShow] = React.useState(false);
  return (
    React.createElement("div", { className: "container" },
    React.createElement("div", {
      className: "inner_content",
      onClick: e => {
        console.log("i will open modal");
        setShow(true);
      } }, "hello I will Open Modal",


    React.createElement(BottomModal, { show: show, setShow: setShow },
    React.createElement(Common, { number: "1" }),
    React.createElement(Common, { number: "2" }),
    React.createElement(Common, { number: "3" }),
    React.createElement(Common, { number: "4" }),
    React.createElement(Common, { number: "5" })))));




}
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

function BottomModal({ show, setShow, children }) {
  return (
    React.createElement("div", {
      className: `modal `,
      onClick: e => {
        e.stopPropagation();
        console.log('i will close also');
        setShow(false);
      },
      style: {
        height: show ? "100%" : "0" } },


    React.createElement("div", { className: `modal_content ${!show ? "bg_tranparent" : ""}` },
    React.createElement("div", {
      className: "close_btn",
      onClick: e => {
        e.stopPropagation();
        setShow(false);
      } },

    React.createElement("i", { class: "fa fa-times" })),

    React.createElement("div", { class: "inner" },
    React.createElement("div", null, children)))));



}

function Common({ number }) {
  return (
    React.createElement("div", { style: {
        position: 'relative',
        top: '10px' } }, "I am Common ",

    number));


}