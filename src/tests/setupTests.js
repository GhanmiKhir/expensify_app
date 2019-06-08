import Enzype from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dotenv from 'dotenv';

Enzype.configure({
  adapter: new Adapter()
});

dotenv.config({
  path: '.env.test'
});
