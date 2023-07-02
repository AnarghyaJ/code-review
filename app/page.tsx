import _ from 'lodash';
import Header from './common/Header';
import ReviewWizard from './ReviewWizard';
import StartPage from './StartPage';
import { useStore } from './store/Store';
import StoreInitializer from './store/StoreInitializer';
import { RequestHandler } from './utils/RequestHandler';
async function codeCompletion() {
  const response = await RequestHandler.getCompletion('Write a java program to get nth fibonacci number', 'gpt-3.5-turbo')
  return response.data;
}

export default async function Home() {
  const { settings, languages, persistence, security, buildEnvironMent, theme, token } = useStore.getState();
  const copy = _.cloneDeep({ settings, languages, persistence, security, buildEnvironMent, theme, token });
  return (
    <main>
      <StoreInitializer {...copy} />
      <Header />
      <StartPage />
    </main>
  )
}
