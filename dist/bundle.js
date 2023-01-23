/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("    // //main.js\n\n    // // import all dependencies:\n    // import { CeramicClient } from '@ceramicnetwork/http-client'\n    // import { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking'\n    // import { DIDDataStore } from '@glazed/did-datastore'\n    // import { DIDSession } from '@glazed/did-session'\n    // import { Composite } from '@composedb/devtools'\n    // // import { writeEncodedComposite } from '@composedb/devtools-node'\n    const { exec } = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'child_process'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\n    const command = 'ls -la';\n    \n    \n    document.getElementById('click').addEventListener('click', async () => {\n             alert('clicked')\n        exec(command, (error, stdout, stderr) => {\n            if (error) {\n                console.error(`exec error: ${error}`);\n                return;\n            }\n            console.log(`stdout: ${stdout}`);\n            console.log(`stderr: ${stderr}`);\n        });\n    //     const ceramic = new CeramicClient('https://gateway-clay.ceramic.network')\n    //     const composite = await Composite.fromModels({ ceramic, models: ['kjzl6hvfrbw6ca7nidsnrv78x7r4xt0xki71nvwe4j5a3s9wgou8yu3aj8cz38e'] })\n    //     console.log({composite})\n    //     console.log({ceramic})\n    //     // await writeEncodedComposite(composite, 'my-first-composite.json')\n      })\n    // //cache a reference to the DOM Elements\n    // const profileForm = document.getElementById('profileForm')\n    // const walletBtn = document.getElementById('walletBtn')\n    // const profileName = document.getElementById('profileName')\n    // const profileGender = document.getElementById('profileGender')\n    // const profileCountry = document.getElementById('profileCountry')\n    // const submitBtn = document.getElementById('submitBtn')\n\n    // // give the wallet button an initial value to display\n    // walletBtn.innerHTML = \"Connect Wallet\"\n    // // setup placeholder text where profile should render\n    // walletBtn.innerHTML = \"Connect Wallet\"\n    // profileName.innerHTML = \"Name: \"\n    // profileGender.innerHTML = \"Gender: \"\n    // profileCountry.innerHTML = \"Country: \"\n\n    // // create a new CeramicClient instance:\n    // const ceramic = new CeramicClient(\"https://ceramic-clay.3boxlabs.com\")\n\n    // // reference the data models this application will use:\n    // const aliases = {\n    //     schemas: {\n    //         basicProfile: 'ceramic://k3y52l7qbv1frxt706gqfzmq6cbqdkptzk8uudaryhlkf6ly9vx21hqu4r6k1jqio',\n\n    //     },\n    //     definitions: {\n    //         BasicProfile: 'kjzl6cwe1jw145cjbeko9kil8g9bxszjhyde21ob8epxuxkaon1izyqsu8wgcic',\n    //     },\n    //     tiles: {},\n    // }\n\n    // // configure the datastore to use the ceramic instance and data models referenced above:\n    // const datastore = new DIDDataStore({ ceramic, model: aliases })\n\n    // // this function authenticates the user using SIWE\n    // async function authenticateWithEthereum(ethereumProvider) {\n\n    //     const accounts = await ethereumProvider.request({\n    //     method: 'eth_requestAccounts',\n    //     })\n\n    //     const authProvider = new EthereumAuthProvider(ethereumProvider, accounts[0])\n\n    //     const session = new DIDSession({ authProvider })\n\n    //     const did = await session.authorize()\n\n    //     ceramic.did = did\n    // }\n\n    // // check for a provider, then authenticate if the user has one injected:\n    // async function auth() {\n    //     if (window.ethereum == null) {\n    //     throw new Error('No injected Ethereum provider found')\n    //     }\n    //     await authenticateWithEthereum(window.ethereum)\n    // }\n\n    // //retrieve BasicProfile data from ceramic using the DIDDatastore\n    // async function getProfileFromCeramic() {\n    //     try {\n\n    //     //use the DIDDatastore to get profile data from Ceramic\n    //     const profile = await datastore.get('BasicProfile')\n\n    //     //render profile data to the DOM (not written yet)\n    //     renderProfileData(profile)\n    //     } catch (error) {\n    //     console.error(error)\n    //     }\n    // }\n\n    // //Do some fun web dev stuff to present the BasicProfile in the DOM\n    // function renderProfileData(data) {\n    //     if (!data) return\n    //     data.name ? profileName.innerHTML = \"Name:     \" + data.name : profileName.innerHTML = \"Name:     \"\n    //     data.gender ? profileGender.innerHTML = \"Gender:     \" + data.gender : profileGender.innerHTML = \"Gender:     \"\n    //     data.country ? profileCountry.innerHTML = \"Country:     \" + data.country : profileCountry.innerHTML = \"Country:     \"\n    // }\n\n    // //this function uses the datastore to write data to the Ceramic Network as well as read data back before populating the changes in the DOM\n    // async function updateProfileOnCeramic() {\n    //     try {\n    //     const updatedProfile = getFormProfile()\n    //     submitBtn.value = \"Updating...\"\n\n    //     //use the DIDDatastore to merge profile data to Ceramic\n    //     await datastore.merge('BasicProfile', updatedProfile)\n\n    //     //use the DIDDatastore to get profile data from Ceramic\n    //     const profile = await datastore.get('BasicProfile')\n\n    //     renderProfileData(profile)\n\n    //     submitBtn.value = \"Submit\"\n    //     } catch (error) {\n    //     console.error(error)\n    //     }\n    // }\n\n    // // Parse the form and return the values so the BasicProfile can be updated\n    // function getFormProfile() {\n\n    //     const name = document.getElementById('name').value\n    //     const country = document.getElementById('country').value\n    //     const gender = document.getElementById('gender').value\n\n    //     // object needs to conform to the data model\n    //     // name -> exists\n    //     // hair-color -> DOES NOT EXIST\n    //     return {\n    //         name,\n    //         country,\n    //         gender\n    //     }\n    // }\n\n\n    // //a simple utility funciton that will get called from the event listener attached to the connect wallet button\n    // async function connectWallet(authFunction, callback) {\n    //     try {\n    //     walletBtn.innerHTML = \"Connecting...\"\n    //     await authFunction()\n    //     await callback()\n    //     walletBtn.innerHTML = \"Wallet Connected\"\n\n    //     } catch (error) {\n    //     console.error(error)\n    //     }\n\n    // }\n\n    // //add both event listeners to that the buttons work when they are clicked\n    // walletBtn.addEventListener('click', async () => await connectWallet(auth, getProfileFromCeramic))\n\n    // profileForm.addEventListener('submit', async (e) => {\n    // e.preventDefault()\n    // await updateProfileOnCeramic()\n\n    // })\n\n//# sourceURL=webpack://composedb/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;