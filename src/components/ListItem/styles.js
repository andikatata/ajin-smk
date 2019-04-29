import { COLOR_PRIMARY, COLOR_PRIMARY_2, COLOR_WHITE } from '../../styles';

const styles = {
  item: {
    backgroundColor: COLOR_PRIMARY,
    borderRadius: '10px',
    color: COLOR_WHITE,
    margin: '0 10px',
    padding: '2px 15px',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: COLOR_PRIMARY_2
    }
  }
};

export default styles;