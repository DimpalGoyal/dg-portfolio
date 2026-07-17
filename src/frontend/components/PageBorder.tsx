function PageBorder() {
  return (
    <div className="pointer-events-none fixed inset-0 hidden lg:block z-20" aria-hidden="true">
      <div className="absolute top-0 bottom-0 left-8 border-l border-dotted border-border-custom" />
      <div className="absolute top-0 bottom-0 right-8 border-l border-dotted border-border-custom" />
    </div>
  );
}

export default PageBorder;
