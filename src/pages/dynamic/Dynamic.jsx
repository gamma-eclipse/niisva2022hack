import { Layout } from 'components/layout';
import { observer } from 'mobx-react-lite';

function Dynamic() {
  return <Layout>Dynamic analysis page</Layout>;
}

export default observer(Dynamic);
