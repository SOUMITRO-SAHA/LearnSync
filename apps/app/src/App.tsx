import { useTranslation } from 'react-i18next';

import './App.css';

function App() {
  const { t } = useTranslation();
  console.log('T: ===>', t);

  return (
    <div className="container">
      <h1>{t('phrases.welcome')}</h1>
    </div>
  );
}

export default App;
