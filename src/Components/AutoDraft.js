
import Stepper from './Stepper';


const AutoDraft = () => {

    return (
        <div className="auto-draft-container">
            <h2 style={{ textAlign: 'center' }}>AutoDraft</h2>
            <p style={{ textAlign: 'center', fontSize: '15px' }}>Intelligent drafting tool to streamline document creation and customization</p>

            <Stepper />
        </div>
    );
};

export default AutoDraft;
