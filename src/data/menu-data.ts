interface MenuItem {
    id: number;
    hasDropdown?: boolean;
    active?: boolean;
    title: string;
    pluseIncon?: boolean;
    link: string;
    submenus?: any[];
    pages?: boolean;
  }
  
  const menu_data: MenuItem[] = [
    {
      id: 1,
      hasDropdown: true,
      active: true,
      title: "Inicio",
      pluseIncon: true,
      link: "/",
    },
    {
      id: 2,
      hasDropdown: false,
      active: true,
      title: "Acerca de",
      pluseIncon: true,
      link: "/about",
    },
    {
      id: 3,
      hasDropdown: true,
      title: "Servicio",
      link: "#",
      pluseIncon: true,
      submenus: [
        { title: "Servicios", link: "/services" },
      ],
    },
  
    {
      id: 4,
      hasDropdown: true,
      title: "Comprar",
      link: "#",
      pluseIncon: true,
      submenus: [
        { title: "Productos", link: "/shop" },
        { title: "Carrito de compras", link: "/cart" },
        { title: "Lista de deseos", link: "/wishlist" },
        { title: "Verificar", link: "/checkout" },
      ],
    },
    {
      id: 5,
      title: "Política",
      link: "#",
      hasDropdown: true,
      submenus: [
        // { title: "Gallery 01", link: "/gallery-1" },
        // {
        //   title: "Gallery 02",
        //   link: "/gallery-2",
        // },
  
        // {
        //   title: "Gallery 03",
        //   link: "/gallery-3",
        // },
        // {
        //   title: "Gallery Details 01",
        //   link: "/gallery-details-1",
        // },
        // { title: "Gallery Details 02", link: "/gallery-details-2" },
        // { title: "Gallery Details 03", link: "/gallery-details-3" },
        // {
        //   title: "Gallery Details 04",
        //   link: "/gallery-details-4",
        // },
        // {
        //   title: "Terms & Condition",
        //   link: "/terms-condition",
        // },
        {
          title: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          title: "Faq",
          link: "/faq",
        },
        // {
        //   title: "SignIn",
        //   link: "/signIn",
        // },
        // {
        //   title: "Sign Up",
        //   link: "/signUp",
        // },
        // {
        //   title: "404 Error",
        //   link: "/error",
        // },
      ],
    },
    {
        id: 6,
        hasDropdown: false,
        active: true,
        title: "Contacto",
        link: "/contact",
      },
  ];
  
  export default menu_data;
  