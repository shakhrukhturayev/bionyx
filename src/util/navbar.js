import { useTranslation } from "react-i18next";

export const NavLinks = () => {
  const { t } = useTranslation();

  return [
    {
      id: "#home",
      title: t('home'),
    },
    {
      id: "#product",
      title: t('product'),
    },
    {
      id: "#advice",
      title: t('advice'),
    },
    {
      id: "#about",
      title: t('about'),
    },
    {
        id: t('langlink'),
        title: t('lang'),
      },
  ];
};
