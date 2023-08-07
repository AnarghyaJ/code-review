import _ from 'lodash';
import { ReactElement } from 'react';
import NavBar from './NavBar';
import ReviewWizard from './ReviewWizard';
import StartPage from './StartPage';
import Header from './common/Header';
import { useStore } from '../store/Store';
import { RequestHandler } from '../utils/RequestHandler';
async function codeCompletion() {
  const response = await RequestHandler.getCompletion('Write a java program to get nth fibonacci number', 'gpt-3.5-turbo')
  return response.data;
}

export default async function Home() {
  const { settings, languages, persistence, security, buildEnvironMent, theme, token, selectedPage } = useStore.getState();
  const copy = _.cloneDeep({ settings, languages, persistence, security, buildEnvironMent, theme, token, selectedPage });
  const pageContent: { [key: string]: ReactElement } = {
    Home: (<StartPage />),
    Reviews: (<ReviewWizard />),
  }
  const page: string = useStore.getState().selectedPage;
  console.log(page)
  return (
    <main>
      <Header />
      <div className="flex flex-row">
        <NavBar />
        {pageContent[page]}
      </div>
    </main>
  )
}
