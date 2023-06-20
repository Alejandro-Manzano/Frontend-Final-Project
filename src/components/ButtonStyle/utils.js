export const getVariants = (theme, variant) => {
  switch (variant) {
    case "small":
      return getSmallVariant(theme);
    case "large":
      return getLargeVariant(theme);
    case "extralarge":
      return getExtralargeVariant(theme);
    case "medium":
    default:
      return getMediumVariant(theme);
  }
};

const getSmallVariant = (theme) => {
  console.log("getSmallVariant -> theme: ", theme);

  return ({
    //width: theme.spacing(12.5),
    width: theme.spacing(10.5),
    //backgroundColor: theme.palette.button.main,
    backgroundColor: theme.palette.button.background.accent,
    border: `${theme.spacing(0.35)} solid ${theme.palette.border.main}`,
    borderRadius: theme.spacing(2.5),
  });
}

const getMediumVariant = (theme) => ({
  width: theme.spacing(18.7),
  height: theme.spacing(18),
  backgroundColor: theme.palette.button.background.accent,
  border: `${theme.spacing(0.35)} solid ${theme.palette.border.main}`,
  borderRadius: theme.spacing(2.5),
});

const getLargeVariant = (theme) => ({
  width: theme.spacing(25),
  height: theme.spacing(15),
  backgroundColor: theme.palette.button.background.error,
  border: `${theme.spacing(0.35)} solid ${theme.palette.border.main}`,
  borderRadius: theme.spacing(2.5),
});

const getExtralargeVariant = (theme) => ({
  width: theme.spacing(31.2),
  backgroundColor: theme.palette.button.background.error,
  border: `${theme.spacing(0.35)} solid ${theme.palette.border.main}`,
  borderRadius: theme.spacing(2.5),
});
