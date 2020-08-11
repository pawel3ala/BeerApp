export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export interface BeerItem {
  name: string,
  image_url: string,
  ibu: number,
  abv: number,
  id: number
}

export type FiltersConfigObject = {
  abv_min: number | null,
  abv_max: number | null,
  ibu_min: number | null,
  ibu_max: number | null
}
