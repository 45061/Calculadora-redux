import { connect } from "react-redux";


function Calculadora({count}){
  return <h2>{count}</h2>
}

const mapStateToProps = ({ count }) => {
  return { count };
};

export default connect(mapStateToProps)(Calculadora);