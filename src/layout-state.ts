import { reactive, readonly } from "vue";

export interface Layout {
  isDialogOpen: boolean;
  areInstructionsOpen: boolean;
  areStatsOpen: boolean;
  areSettingsOpen: boolean;
}

const layout = reactive({
  isDialogOpen: false,
  areInstructionsOpen: false,
  areSettingsOpen: false,
  areStatsOpen: false,
} as Layout);

/**
 * A function to get the current layout information
 *
 * @returns {Location} A layout object
 */
export const getLayout = (): Readonly<Layout> => {
  return readonly(layout);
};

export const setIsDialogOpen = (isDialogOpen: boolean): void => {
  layout.isDialogOpen = isDialogOpen;
  if (!isDialogOpen) {
    layout.areInstructionsOpen = false;
  }
};

export const setAreInstructionsOpen = (areInstructionsOpen: boolean): void => {
  layout.isDialogOpen = areInstructionsOpen;
  layout.areInstructionsOpen = areInstructionsOpen;
};

export const setAreSettingsOpen = (areSettingsOpen: boolean): void => {
  layout.isDialogOpen = areSettingsOpen;
  layout.areSettingsOpen = areSettingsOpen;
};

export const setAreStatsOpen = (areStatsOpen: boolean): void => {
  layout.isDialogOpen = areStatsOpen;
  layout.areStatsOpen = areStatsOpen;
};
