"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,219];
exports.modules = {

/***/ 1787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/slices/userSlice.tsx
var userSlice = __webpack_require__(754);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-persist/lib/storage/createWebStorage"
const createWebStorage_namespaceObject = require("redux-persist/lib/storage/createWebStorage");
;// CONCATENATED MODULE: ./redux/storage.tsx


const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },

    setItem(_key, value) {
      return Promise.resolve(value);
    },

    removeItem(_key) {
      return Promise.resolve();
    }

  };
};

const storage =  false ? 0 : createNoopStorage();
/* harmony default export */ const redux_storage = (storage);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./redux/store.tsx







const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
  user: userSlice/* default.reducer */.ZP.reducer
});
const persistConfig = {
  key: "root",
  storage: redux_storage // whitelist: ["user"], userStateだけpersistにすると、プレイ画面でリロードしたときエラーが発生する。
  // stateReconciler: hardSet,

};
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, rootReducer);
const store = (0,external_redux_namespaceObject.createStore)(persistedReducer, (0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default())));
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./public/favicon.ico
/* harmony default export */ const favicon = ({"src":"/_next/static/image/public/favicon.6d176e7fc85917a641d0b2449dfe7490.ico","height":16,"width":16});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/atoms/AppLogo.tsx






const AppLogo = props => {
  if (props.disabled) {
    return /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      className: "",
      src: favicon,
      alt: "AppLogoImage",
      width: 36,
      height: 36
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          className: "",
          src: favicon,
          alt: "AppLogoImage",
          width: 36,
          height: 36
        })
      })
    });
  }
};

/* harmony default export */ const atoms_AppLogo = (AppLogo);
;// CONCATENATED MODULE: ./src/components/atoms/Label.tsx




const Label = props => {
  if (props.disabled) {
    return /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "text-uma-text1 font-bold block text-sm text-white hover:text-gray-600",
      children: props.labelText
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx("label", {
      className: "text-uma-text1 font-bold block text-sm text-white hover:text-gray-600",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: props.href,
        children: props.labelText
      })
    });
  }
};

/* harmony default export */ const atoms_Label = (Label);
;// CONCATENATED MODULE: ./src/components/atoms/CommonInput.tsx




const CommonInput = props => {
  return /*#__PURE__*/_jsx(TextField, {
    className: "",
    label: props.label,
    fullWidth: props.fullWidth,
    autoFocus: props.autoFocus,
    margin: "dense",
    multiline: props.multiline,
    required: props.required,
    rows: props.rows,
    value: props.value,
    type: props.type,
    variant: "outlined",
    onChange: props.onChange,
    onBlur: props.onBlur,
    error: props.error,
    helperText: props.helperText,
    onKeyDown: props.onKeyDown
  });
};

/* harmony default export */ const atoms_CommonInput = ((/* unused pure expression or super */ null && (CommonInput)));
// EXTERNAL MODULE: ./src/components/atoms/PlayButton.tsx
var PlayButton = __webpack_require__(3209);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js + 1 modules
var Button = __webpack_require__(7596);
;// CONCATENATED MODULE: ./src/components/atoms/PButton.tsx




const PButton = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
    color: "primary",
    variant: "contained",
    onClick: () => props.onClick(),
    disabled: props.isDisabled,
    children: props.label
  });
};

/* harmony default export */ const atoms_PButton = (PButton);
;// CONCATENATED MODULE: external "@material-ui/icons/ExpandMore"
const ExpandMore_namespaceObject = require("@material-ui/icons/ExpandMore");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_namespaceObject);
;// CONCATENATED MODULE: ./src/components/atoms/DropdownIcon.tsx




const DropdownIcon = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx((ExpandMore_default()), {
      fontSize: "small"
    })
  });
};

/* harmony default export */ const atoms_DropdownIcon = (DropdownIcon);
;// CONCATENATED MODULE: ./src/components/atoms/Button.tsx




const Button_Button = props => {
  return /*#__PURE__*/_jsx("button", {
    className: "border w-20 rounded-md font-bold h-8 shadow  text-white text-xs hover:text-gray-600 hover:border-gray-600",
    children: /*#__PURE__*/_jsx(Link, {
      href: props.href,
      children: props.buttonText
    })
  });
};

/* harmony default export */ const atoms_Button = ((/* unused pure expression or super */ null && (Button_Button)));
// EXTERNAL MODULE: ./src/components/atoms/ImagePreview.tsx
var ImagePreview = __webpack_require__(4920);
;// CONCATENATED MODULE: ./src/components/atoms/index.tsx







;// CONCATENATED MODULE: external "@material-ui/icons/AccountCircle"
const AccountCircle_namespaceObject = require("@material-ui/icons/AccountCircle");
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "@material-ui/core"
const core_namespaceObject = require("@material-ui/core");
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Menu/Menu.js + 23 modules
var Menu = __webpack_require__(2972);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js + 2 modules
var MenuItem = __webpack_require__(1581);
// EXTERNAL MODULE: ./public/images/no-profile.png
var no_profile = __webpack_require__(7309);
;// CONCATENATED MODULE: ./src/components/molecules/AfterLoginButton.tsx














const AfterLoginButton = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const user = (0,external_react_redux_.useSelector)(userSlice/* getUser */.PR).user;
  const [anchorEl, setAnchorEl] = external_react_default().useState(null); // クッリク時にドロップダウンを表示

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  }; // ドロップダウンメニューを閉じる


  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToProfile = () => {
    router_default().push("/users/profile");
    handleClose();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center justify-end w-full",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_namespaceObject.IconButton, {
        onClick: handleClick,
        children: [/*#__PURE__*/jsx_runtime_.jsx((AccountCircle_default()), {}), /*#__PURE__*/jsx_runtime_.jsx(atoms_DropdownIcon, {})]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Menu/* default */.Z, {
      anchorEl: anchorEl,
      keepMounted: true,
      open: Boolean(anchorEl),
      onClose: handleClose,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mx-12 mt-2 flex items-center justify-evenly",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          className: "rounded-full",
          src: no_profile/* default */.Z,
          alt: "NoProfileImage",
          width: 56,
          height: 56
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-xl flex items-center justify-evenly border-b mx-2 my-1 border-gray-400",
        children: user.username
      }), /*#__PURE__*/jsx_runtime_.jsx(MenuItem/* default */.Z, {
        onClick: () => {
          dispatch((0,userSlice/* signOutUser */.Mx)());
        },
        children: "\u30ED\u30B0\u30A2\u30A6\u30C8"
      })]
    })]
  });
};

/* harmony default export */ const molecules_AfterLoginButton = (AfterLoginButton);
;// CONCATENATED MODULE: ./src/components/molecules/BeforeLoginButton.tsx





const BeforeLoginButton = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex justify-around",
    children: /*#__PURE__*/jsx_runtime_.jsx(atoms_PButton, {
      label: "Github\u3067\u30ED\u30B0\u30A4\u30F3",
      onClick: () => {
        dispatch((0,userSlice/* signInUser */.w2)());
      }
    })
  });
};

/* harmony default export */ const molecules_BeforeLoginButton = (BeforeLoginButton);
;// CONCATENATED MODULE: ./src/components/molecules/index.tsx


;// CONCATENATED MODULE: ./src/components/organisms/Header.tsx









const Header = () => {
  const user = (0,external_react_redux_.useSelector)(userSlice/* getUser */.PR).user;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "w-screen",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-full h-16 py-2 flex items-center bg-gray-200 text-black",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-2/12",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-xl text-center",
          children: "OSS\u3078\u306E\u611F\u8B1D\u3092\u4F1D\u3048\u308B"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-xs text-center",
          children: "ThankYouOSS"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-3/12"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-2/12 text-xl text-center",
        children: "\u958B\u767A\u30C1\u30FC\u30E0"
      }), "\uFF1A", /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-2/12",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-xl text-center",
          children: "\u9032\u6483\u306EE"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-xs text-center",
          children: "Attack on E"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-full flex items-center h-16 bg-blue-400",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "flex items-center w-1/12 pl-16",
        children: /*#__PURE__*/jsx_runtime_.jsx(atoms_AppLogo, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex justify-evenly w-3/12 items-center",
        children: /*#__PURE__*/jsx_runtime_.jsx(atoms_Label, {
          labelText: "\u30DB\u30FC\u30E0",
          href: "/"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-5/12"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-2/12 flex items-center justify-evenly",
        children: user.isSignedIn ? /*#__PURE__*/jsx_runtime_.jsx(molecules_AfterLoginButton, {}) : /*#__PURE__*/jsx_runtime_.jsx(molecules_BeforeLoginButton, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-1/12"
      })]
    })]
  });
};

/* harmony default export */ const organisms_Header = (Header);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
    store: store,
    children: [/*#__PURE__*/jsx_runtime_.jsx(organisms_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 4047:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 9137:
/***/ ((module) => {

module.exports = require("@material-ui/system");

/***/ }),

/***/ 2958:
/***/ ((module) => {

module.exports = require("@material-ui/utils");

/***/ }),

/***/ 6139:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3536:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 9421:
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ 5942:
/***/ ((module) => {

module.exports = require("firebase/auth");

/***/ }),

/***/ 9714:
/***/ ((module) => {

module.exports = require("firebase/firestore");

/***/ }),

/***/ 8828:
/***/ ((module) => {

module.exports = require("firebase/storage");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4229:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 3857:
/***/ ((module) => {

module.exports = require("react-is");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 3810:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [426,664,675,720,878,962], () => (__webpack_exec__(1787)));
module.exports = __webpack_exports__;

})();