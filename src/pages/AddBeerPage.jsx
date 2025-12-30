import { AddBeer } from '../components/beers';
import { PageLayout } from '../components/layout'

function AddBeerPage ({ onSubmitBeer }) {
  return (
    <PageLayout>
      <AddBeer onSubmitBeer={ onSubmitBeer }/>
    </PageLayout>
  );
}

export default AddBeerPage;