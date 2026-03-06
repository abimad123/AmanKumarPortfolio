const Footer = () => (
  <footer className="py-8 border-t border-border/50">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="neon-text font-medium">Aman Kumar Dhar</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
