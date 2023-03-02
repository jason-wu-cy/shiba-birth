import Default from './Config/Default';
import Develop from './Config/Develop';
import Production from './Config/Production';

class Env {
  constructor() {
    this.env = {};
    this.initialize();
  }

  initialize() {
    this.setEnv(process.env.APP_ENV);
  }

  setEnv(env) {
    switch (env) {
      case 'prod':
        this.env = Production;
        break;
      case 'dev':
        this.env = Develop;
        break;
      default:
        this.env = Default;
        break;
    }
  }

  getEnv() {
    return this.env;
  }
}

const ENVInstance = new Env();
export default ENVInstance;
