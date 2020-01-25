/**
 * After storybook v5.3, They recommend use CSF(Component Story Format)
 * instead of using storiesof API
 */
import React from "react";
import Component from "./index";
import { withKnobs, text, array, object } from "@storybook/addon-knobs";

export default {
    title: "PAGES|Main/PostCardList",
    component: Component,
    decorators: [withKnobs],
    parameter: {
        componentSubtitle: "Global common botton"
    }
};

export const standard = () => {
    const title = text("title", "카테고리");
    const post01 = object("post01", {
        title: "[GraphQL] 그래프큐엘 실전 적용하기",
        description:
            "REST API를 대체하는 그래프 큐엘에 대해 배워봅시다. 기존의 웹 개발은 MVC 패턴을 사용하며 View와 Model 사이의 데이터 교환을 위해 REST API를 썼습니다. 하지만, 요구되는 데이터가 많아질수록 새로운 엔드포인트를 만들어야하는 불편함에 놓인 개발자들은 GraphQL이라는 방식의 데이터 교환 질의어를 고안합니다.",
        thumbnailURL:
            "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        createdAt: 124124
    });
    const post02 = object("post02", {
        title: "[Javascript] 자바스크립트 동작 원리",
        description:
            "오늘날 웹 개발뿐만 아니라 서버, AR, 머신러닝 등에 다양하게 쓰이는 Javascript. 자바스립트는 과연 어떻게 동작하는 것일까요? 오늘은 자바스크립트의 동작 원리에 대해 파악해봅시다. 최신 자바스크립트는 구글에서 만든 V8엔진을 기반으로 동작합니다. 따라서 자바스크립트의 동작을 파악하기 위해 V8엔진에 대한 이해는 필수입니다.",
        thumbnailURL: "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
        createdAt: 124124
    });
    const post03 = object("post03", {
        title: "[Docker] 도커를 학습해봅시다.",
        description:
            "서버를 개발하다 보면, 다양한 인프라 문제를 마주치게됩니다. 또한, 개발환경에서 개발을 진행하던 어플리케이션과 인프라가 실제 운용 서버에선 정상적으로 동작하지 않아 개발자들이 곤욕을 겪곤합니다. 이런 문제를 해결하기 위해, 리눅스에서 기본적으로 제공하는 LXC 기술을 이용한 도커가 개발되었습니다.",
        thumbnailURL: "https://www.bigstockphoto.com/images/homepage/module-6.jpg",
        createdAt: 124124
    });
    return <Component title={title} postList={[post01, post02, post03]} />;
};
