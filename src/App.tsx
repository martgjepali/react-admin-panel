import { Admin, CustomRoutes, houseDarkTheme, houseLightTheme, Resource } from "react-admin";
import { Route } from "react-router-dom";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import UserList from "./components/users/UserList";
import DestinationList from "./components/destinations/DestinationList";
import PackageList from "./components/packages/PackageList";
import BookingList from "./components/bookings/BookingList";
import PostDestination from "./components/destinations/PostDestination";
import PostPackage from "./components/packages/PostPackage";
import EditDestination from "./components/destinations/EditDestination";
import EditPackage from "./components/packages/EditPackage";
import { dataProvider } from "./providers/dataProvider";
import UserIcon from "@mui/icons-material/Group";
import DestinationIcon from "@mui/icons-material/Place";
import PackageIcon from "@mui/icons-material/CardTravel";
import BookingIcon from "@mui/icons-material/Event";
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentList from "./components/payments/PaymentList";

export const App = () => (
  <Admin
  theme={houseLightTheme}
        darkTheme={houseDarkTheme}
    layout={Layout}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource
      name="destinations"
      list={DestinationList}
      create={PostDestination}
      edit={EditDestination}
      icon={DestinationIcon}
    />
    <Resource
      name="packages"
      list={PackageList}
      create={PostPackage}
      edit={EditPackage}
      icon={PackageIcon}
    />
    <Resource name="bookings" list={BookingList} icon={BookingIcon} />
    <Resource
      name="payments"
      icon={PaymentIcon}
      list={PaymentList}
    />
    <CustomRoutes>
      <Route
        path="/packages/create"
        element={<PostPackage resource="packages" />}
      />
      <Route
        path="/destinations/create"
        element={<PostDestination resource="destinations" />}
      />
    </CustomRoutes>
  </Admin>
);
