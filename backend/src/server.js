import 'dotenv/config';

import App from './App';

const PORT = process.env.SERVER_PORT || 3333;
const HOSTNAME = process.env.SERVER_HOST || 'localhost';

App.listen(PORT, () => {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
  console.log(`To stop it press CTRL + C`);
});
