export default function BackgroundAnimations() {
  return (
    <>
      <div className="bg-primary-light fixed -z-10 left-[11rem] h-[31.25rem] w-[21.25rem] rounded-full blur-[3rem] dark:bg-primary-dark"></div>
      <div className="bg-primary-light fixed -z-10 left-[25rem] h-[24.25rem] w-[35.25rem] top-[15rem] rounded-full blur-[5rem] dark:bg-secondary-dark"></div>
      <div className="bg-secondary-light fixed top-[0rem] -z-10 right-[11rem] h-[51.25rem] w-[31.25rem] rounded-full blur-[4rem] dark:bg-tertiary-dark"></div>
    </>
  );
}
