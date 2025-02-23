import Estate from "../Estate/Estate";
import PropTypes from 'prop-types';

const ALlEstateCard = ({allData}) => {
    
    return (
        <div className="max-w-[1250px] mx-auto px-4 md:px-5 lg:px-2 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
                allData.map(card=> <Estate key={card.id} card={card}></Estate>)
            }
        </div>
    );
};
ALlEstateCard.propTypes ={
    allData: PropTypes.array
}
export default ALlEstateCard;