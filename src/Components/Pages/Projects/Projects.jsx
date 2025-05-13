// import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';
import DisplayDetailsCard from '../../../Components/Details/DisplayDetailsCard';


const projects = [
  {
    name:'Machine Learning: Human Emotion Detector',
    description:'Jan 2024- April 2024',
    technologies:'Python, Jupyter Notebook, Pandas, Keras, Tensorflow, Scikit-Learn',
    date:'Jan 2024- April 2024',
    content:[
      '● Trained various machine learning and deep learning models, including SVM, ANN, and CNN, to predict human emotions from grayscale images, achieving accurate emotion classification through image analysis.',
      '● Preprocessed a dataset of 37,000+ human emotion images taken from Kaggle, utilized Pandas, Keras, and NumPy to optimize them as training data for machine learning models, achieving an average prediction accuracy of 60%.'
    ],
  },    
];

function Projects() {
  return (
    <div>

      <div>

        {/* <SectionHeading text='Technical Projects' color='white' /> */}
        <DisplayDetailsCard details= { projects }/>

      </div>

    </div>
  )
}


export default Projects;
