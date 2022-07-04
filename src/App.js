import React from 'react';
import Review from './components/Review';

const App = () => {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>My Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </div>
    </main>
  )
}

export default App