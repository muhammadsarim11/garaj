document.addEventListener("DOMContentLoaded", () => {
  const FirstAnimations = () => {
    const elements = document.querySelectorAll(".icon-outlined");

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 0.5,
        stagger: 0.04,
      }
    );

    gsap.to(".svg-pipeline", {
      opacity: 1,
      delay: 1,
      duration: 2,
    });

    elements.forEach((elem) => {
      const [iconDefault, iconColored] = elem.querySelectorAll("img");

      const onHover = () => {
        gsap.to(iconDefault, {
          opacity: 0,
          scale: 0.96,
        });

        gsap.to(iconColored, {
          opacity: 1,
          scale: 1.05,
        });

        gsap.fromTo(
          elem,
          {
            backgroundColor: "#f6f9fd",
            scale: 1,
          },
          {
            scale: 1.05,
            backgroundColor: "white",
            boxShadow: "0px 3px 10px 1px #d0d8e2",
            border: "1px solid transparent",
          }
        );
      };

      const onHoverOut = () => {
        gsap.to(iconDefault, {
          opacity: 1,
          scale: 1,
        });
        gsap.to(iconColored, {
          opacity: 0,
          scale: 1,
        });
        gsap.fromTo(
          elem,
          {
            scale: 1.05,
            backgroundColor: "white",
          },
          {
            backgroundColor: "#f6f9fd",
            scale: 1,
            boxShadow: "0px 3px 10px 1px transparent",
            border: "1px solid #e0e0e0",
          }
        );
      };

      elem.addEventListener("mouseenter", onHover);
      elem.addEventListener("mouseleave", onHoverOut);
    });
  };

  const paths = [
    { id: "path1", element: null, length: 0 },
    { id: "path2", element: null, length: 0 },
    { id: "path3", element: null, length: 0 },
    { id: "path4", element: null, length: 0 },
    { id: "path5", element: null, length: 0 },
  ];

  const boxes = [
    [document.getElementById("box1"), document.getElementById("box2")],
    [document.getElementById("box3"), document.getElementById("box4")],
    [document.getElementById("box5"), document.getElementById("box6")],
    [document.getElementById("box7")],
    [document.getElementById("box8"), document.getElementById("box9")],
  ];

  const timelines = paths.map((pathObj) => {
    const path = document.getElementById(pathObj.id);
    pathObj.element = path;
    pathObj.length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathObj.length,
      strokeDashoffset: pathObj.length,
    });

    return gsap.timeline({ defaults: { ease: "power2.out" } });
  });

  timelines.forEach((tl, i) => {
    const group = boxes[i];
    const path = paths[i].element;
    const pathLength = paths[i].length;

    group.forEach((box) => {
      const img = box.querySelectorAll("img")[1]; // colored image
      tl.fromTo(
        img,
        { scale: 0.5, opacity: 0 },
        { scale: 1.05, opacity: 1, duration: 0.6 }
      );
      tl.fromTo(
        box,
        { backgroundColor: "#f6f9fd" },
        {
          scale: 1.05,
          opacity: 1,
          duration: 0.5,
          backgroundColor: "white",
          boxShadow: "0px 3px 10px 1px #d0d8e2",
          border: "1px solid transparent",
        }
      );
    });

    tl.to(path, { strokeDashoffset: 0, duration: 0.6 });

    tl.to(path, { strokeDashoffset: pathLength, duration: 0, delay: 0.3 });

    tl.set(
      group.map((box) => box.querySelectorAll("img")[1]),
      { opacity: 0, scale: 0.5 }
    );

    tl.set(group, {
      backgroundColor: "#f6f9fd",
      scale: 1,
      boxShadow: "0px 3px 10px 1px transparent",
      border: "1px solid #e0e0e0",
    });
  });

  const master = gsap.timeline({ repeat: -1 });
  master
    .add(timelines[0])
    .add(timelines[1])
    .add(timelines[2])
    .add(gsap.timeline().add(timelines[3], 0).add(timelines[4], 0));

  FirstAnimations();
});
