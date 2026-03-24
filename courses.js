// courses.js
window.courseData = [
    { id: 1, name: "데이터마이닝", prof: "이한림", dept: "빅데이터", credit: 3, time: "MON-A,WED-A", type: "alpha", slots: ["MON-A", "WED-A"], cap: 40, enr: 32, wait: 0, num: "101", category: "전공" },
    { id: 2, name: "HCI (인간컴퓨터상호작용)", prof: "김지선", dept: "콘텐츠IT", credit: 3, time: "TUE2,TUE3,THU2,THU3", type: "num", slots: ["TUE2", "TUE3", "THU2", "THU3"], cap: 30, enr: 30, wait: 5, num: "102", category: "전공" },
    { id: 3, name: "정보보호론", prof: "최보안", dept: "컴퓨터공학", credit: 3, time: "TUE5,TUE6,THU5,THU6", type: "num", slots: ["TUE5", "TUE6", "THU5", "THU6"], cap: 50, enr: 42, wait: 0, num: "103", category: "전공" },
    { id: 4, name: "오디세이 세미나 3", prof: "나진로", dept: "기초교육", credit: 1, time: "FRI4", type: "num", slots: ["FRI4"], cap: 100, enr: 80, wait: 0, num: "104", category: "오디세이세미나" },
    { id: 5, name: "빅데이터분석", prof: "박지능", dept: "소프트웨어", credit: 3, time: "MON-C,WED-C", type: "alpha", slots: ["MON-C", "WED-C"], cap: 60, enr: 60, wait: 10, num: "105", category: "전공" },
    { id: 6, name: "파이썬과 정보소통", prof: "이정보", dept: "컴퓨터공학", credit: 3, time: "TUE-B,THU-B", type: "alpha", slots: ["TUE-B", "THU-B"], cap: 30, enr: 25, wait: 0, num: "106", category: "정보소통" },
    { id: 7, name: "생애설계와 비전", prof: "김미래", dept: "기초교육", credit: 2, time: "MON7,MON8", type: "num", slots: ["MON7", "MON8"], cap: 40, enr: 35, wait: 0, num: "107", category: "생애설계" },
    { id: 8, name: "데이터베이스", prof: "쿼리강", dept: "빅데이터", credit: 3, time: "TUE-D,THU-D", type: "alpha", slots: ["TUE-D", "THU-D"], cap: 35, enr: 15, wait: 0, num: "108", category: "전공" },
    { id: 9, name: "프레젠테이션 스킬", prof: "최발표", dept: "국문학", credit: 3, time: "TUE6,TUE7,THU6,THU7", type: "num", slots: ["TUE6", "TUE7", "THU6", "THU7"], cap: 40, enr: 20, wait: 0, num: "109", category: "의사소통" },
    { id: 10, name: "Business English", prof: "Smith", dept: "영문학", credit: 3, time: "FRI2,FRI3", type: "num", slots: ["FRI2", "FRI3"], cap: 30, enr: 28, wait: 0, num: "110", category: "글로벌소통" },
    { id: 11, name: "테니스", prof: "나운동", dept: "체육학", credit: 1, time: "MON4,MON5", type: "num", slots: ["MON4", "MON5"], cap: 20, enr: 15, wait: 0, num: "111", category: "스포츠웰니스" },
    { id: 12, name: "교양 기초 수학", prof: "김수학", dept: "수학", credit: 3, time: "MON-E,WED-E", type: "alpha", slots: ["MON-E", "WED-E"], cap: 40, enr: 35, wait: 0, num: "112", category: "교양이수학점" },
    { id: 13, name: "알고리즘기초", prof: "정논리", dept: "컴공", credit: 3, time: "MON1,MON2,WED1,WED2", type: "num", slots: ["MON1", "MON2", "WED1", "WED2"], cap: 40, enr: 35, wait: 0, num: "113", category: "전공" },
    { id: 14, name: "디지털논리회로", prof: "게이트", dept: "전자", credit: 3, time: "MON3,THU1", type: "num", slots: ["MON3", "THU1"], cap: 40, enr: 35, wait: 0, num: "114", category: "전공" },
    { id: 15, name: "사이버심리학", prof: "마음이", dept: "심리", credit: 2, time: "FRI-A", type: "alpha", slots: ["FRI-A"], cap: 50, enr: 48, wait: 0, num: "115", category: "교양이수학점" },
    { id: 16, name: "모바일앱개발", prof: "안드로", dept: "IoT", credit: 3, time: "TUE-B,THU-B", type: "alpha", slots: ["TUE-B", "THU-B"], cap: 30, enr: 25, wait: 0, num: "116", category: "전공" },
    { id: 17, name: "운영체제", prof: "커널조", dept: "컴공", credit: 3, time: "MON7,MON8,WED7,WED8", type: "num", slots: ["MON7", "MON8", "WED7", "WED8"], cap: 40, enr: 40, wait: 8, num: "117", category: "전공" },
    { id: 18, name: "웹프레임워크", prof: "리액트", dept: "IT", credit: 3, time: "TUE-C,THU-C", type: "alpha", slots: ["TUE-C", "THU-C"], cap: 30, enr: 10, wait: 0, num: "118", category: "전공" },
    { id: 19, name: "리눅스시스템", prof: "펭귄님", dept: "컴공", credit: 3, time: "TUE7,TUE8,THU7,THU8", type: "num", slots: ["TUE7", "TUE8", "THU7", "THU8"], cap: 30, enr: 15, wait: 0, num: "119", category: "전공" },
    { id: 20, name: "객체지향설계", prof: "클래스", dept: "소프트", credit: 3, time: "MON-B,WED-B", type: "alpha", slots: ["MON-B", "WED-B"], cap: 30, enr: 22, wait: 0, num: "120", category: "전공" }
];