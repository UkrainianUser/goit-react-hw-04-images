import { FidgetSpinner } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
			<FidgetSpinner
				visible={true}
				height="80"
				width="80"
				ariaLabel="dna-loading"
				wrapperStyle={{}}
				wrapperClass="dna-wrapper"
				ballColors={['#ff0000', '#00ff00', '#0000ff']}
				backgroundColor="#F4442E"
			/>
    </div>
  );
};

export default Loader;