import { configureStore } from "@reduxjs/toolkit";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { companiesApi } from "./api/companiesApi";
import Home from "./page";

const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      [companiesApi.reducerPath]: companiesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(companiesApi.middleware),
    preloadedState: initialState,
  });
};

const TestWrapper = ({
  children,
  store = createTestStore(),
}: {
  children: React.ReactNode;
  store?: any;
}) => <Provider store={store}>{children}</Provider>;

const mockCompaniesResponse = {
  data: [
    {
      companyId: 1,
      companyName: "Test Company",
      companyTicker: "TEST",
      companyCountry: "US",
      displayName: "Test Company",
      description: "A test company for testing purposes",
      iconUrl: "https://example.com/icon.png",
      logoLightUrl: "https://example.com/logo-light.png",
      logoDarkUrl: "https://example.com/logo-dark.png",
      colorSettings: { brandColor: "#000000" },
      events: [],
      infoUrl: "https://example.com/info",
      isins: ["US1234567890"],
      liveUrl: "https://example.com/live",
      reportingCurrency: "USD",
    },
  ],
};

describe("Home Page with RTK Query", () => {
  it("shows loading state initially", async () => {
    const { getByText } = render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(getByText("Loading companies...")).toBeInTheDocument();
    });
  });

  it("shows companies when data is loaded", async () => {
    // Mock the API response
    const store = createTestStore({
      [companiesApi.reducerPath]: {
        queries: {
          "getCompanies(undefined)": {
            status: "fulfilled",
            data: mockCompaniesResponse,
          },
        },
        mutations: {},
        provided: {},
        subscriptions: {},
        config: {
          online: true,
          focused: true,
          middlewareRegistered: true,
        },
      },
    });

    const { getByText, getByRole } = render(
      <TestWrapper store={store}>
        <Home />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(getByText("Trending companies")).toBeInTheDocument();
      expect(
        getByRole("list", { name: "List of trending companies" })
      ).toBeInTheDocument();
      expect(getByText("Test Company")).toBeInTheDocument();
    });
  });

  it("shows error state when API fails", async () => {
    const store = createTestStore({
      [companiesApi.reducerPath]: {
        queries: {
          "getCompanies(undefined)": {
            status: "rejected",
            error: { status: 500, data: "Internal Server Error" },
          },
        },
        mutations: {},
        provided: {},
        subscriptions: {},
        config: {
          online: true,
          focused: true,
          middlewareRegistered: true,
        },
      },
    });

    const { getByText } = render(
      <TestWrapper store={store}>
        <Home />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(
        getByText("Error loading companies. Please try again later.")
      ).toBeInTheDocument();
    });
  });

  it("shows error state when data is empty", async () => {
    const store = createTestStore({
      [companiesApi.reducerPath]: {
        queries: {
          "getCompanies(undefined)": {
            status: "fulfilled",
            data: { data: [] },
          },
        },
        mutations: {},
        provided: {},
        subscriptions: {},
        config: {
          online: true,
          focused: true,
          middlewareRegistered: true,
        },
      },
    });

    const { getByText } = render(
      <TestWrapper store={store}>
        <Home />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(
        getByText("Error loading companies. Please try again later.")
      ).toBeInTheDocument();
    });
  });
});
