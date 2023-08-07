import _ from 'lodash';
import { useStore } from '../store/Store';
import StoreInitializer from '../store/StoreInitializer';
import { RequestHandler } from '../utils/RequestHandler';
import NavBar from './NavBar';
import Header from './common/Header';
import PageContent from './PageContent';

async function codeCompletion() {
  const response = await RequestHandler.getCompletion('Write a java program to get nth fibonacci number', 'gpt-3.5-turbo')
  return response.data;
}

export default async function Home() {
  const { settings, languages, persistence, security, buildEnvironMent, theme, token, selectedPage } = useStore.getState();
  const copy = _.cloneDeep({ settings, languages, persistence, security, buildEnvironMent, theme, token, selectedPage });
  return (
    <main>
      <StoreInitializer {...copy} />
    </main>
  )
}
