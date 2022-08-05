import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import services from "../data/services";

interface ServiceProviderProps {
  children: React.ReactNode;
}

export const ServiceContext = createContext({
  allServices: {} as any,
  featured: {} as any,
  popular: {} as any,
});

export const ServiceProvider = ({ children }: ServiceProviderProps) => {
  const getServices = async () => {
    // const response = await fetch("https://api.tanstack.com/services");
    // return await response.json();
    return services.services;
  };

  const { data } = useQuery(["services"], getServices);

  const value = { allServices: data?.products, featured: data?.featured, popular: data?.popular };
  return <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>;
};
