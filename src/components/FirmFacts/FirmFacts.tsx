import { ReactComponent as SearchIcon } from 'assets/search.svg';
import { Button, Card } from 'components';

import styles from './styles.module.scss';

export const FirmFacts = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Firm Facts</h1>

      <div className={styles.grid}>
        <Card>
          <Button icon={<SearchIcon />} variant="icon">
            This is a two line button that terminates with an ellipsis
          </Button>
        </Card>
        <Card>
          <Button icon={<SearchIcon />} variant="icon">
            This is a two line button that terminates with an ellipsis
          </Button>
        </Card>
        <Card>
          <Button>This is a one line button</Button>
        </Card>
        <Card>
          <Button icon={<SearchIcon />} variant="icon">
            This is a two line button that terminates with an ellipsis
          </Button>
        </Card>
        <Card>
          <Button icon={<SearchIcon />} variant="icon">
            This is a two line button that terminates with an ellipsis
          </Button>
        </Card>
        <Card>
          <Button disabled icon={<SearchIcon />} variant="icon">
            This is a two line button that terminates with an ellipsis
          </Button>
        </Card>
        <Card variant="border">
          <Button icon={<SearchIcon />} variant="icon">
            This is a two line button that terminates with an ellipsis
          </Button>
        </Card>
      </div>
    </div>
  );
};
