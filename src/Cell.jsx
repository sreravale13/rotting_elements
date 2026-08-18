import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import redapple from './assets/red-apple.svg';
import blackapple from './assets/black-apple.svg';

const Cell = (props) => {
   const { classVal, showQueen } = props;
   const classValue = 'cell';

   const source = classVal === "beige" ? redapple : blackapple;

   return (
         <div className={classValue}>
            {showQueen && <img src={source} height={'50px'} width={'50px'} />}
         </div>
      )



}

export default Cell;