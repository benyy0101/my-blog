import React from 'react'

function Education() {
    return (
        <div className="flex min-h-[100vh] flex-col gap-20">
            <div className="text-4xl text-main font-bold">Education</div>
            <div className="space-y-1">
                <div className="flex flex-grow-[1] justify-start items-start gap-10">
                    {/* 막대기 */}
                    <div className="flex flex-col gap-1 h-full">
                        <div className="bg-main h-[10px] w-[10px] rounded-full mt-1" />
                        <div className="bg-[#EEEEEE] w-[2px] ml-1 h-56" />
                    </div>

                    {/* 설명란 */}
                    <div className="space-y-4">
                        <div className="text-sub">2023년 7월 ~ 현재</div>
                        <div className="text-main text-4xl font-medium">
                            삼성 청년 SW 아카데미 10기
                        </div>
                        <div className="text-des">베스트멤버 3회, 우수프로젝트 선정 2회</div>
                    </div>
                </div>

                <div className="flex flex-grow-[1] justify-start items-start gap-10">
                    {/* 막대기 */}
                    <div className="flex flex-col gap-1">
                        <div className="bg-main h-[10px] w-[10px] rounded-full" />
                        <div className="bg-[#EEEEEE] w-[2px] ml-1 h-56" />
                    </div>

                    {/* 설명란 */}
                    <div className="space-y-4">
                        <div className="text-sub">2019년 9월 ~ 2022년 6월</div>
                        <div className="text-main text-4xl font-medium">
                            Oregon State University, OS
                        </div>
                        <div className="text-des">Computer Science, Magna Cum Laude</div>
                    </div>
                </div>

                <div className="flex flex-grow-[1] justify-start items-start gap-10">
                    {/* 막대기 */}
                    <div className="flex flex-col gap-1">
                        <div className="bg-main h-[10px] w-[10px] rounded-full" />
                        <div className="bg-[#EEEEEE] w-[2px] ml-1 h-56" />
                    </div>

                    {/* 설명란 */}
                    <div className="space-y-4">
                        <div className="text-sub">2015년 1월 ~ 2016년 6월</div>
                        <div className="text-main text-4xl font-medium">
                            Drew University, NJ
                        </div>
                        <div className="text-sub">Physics, College of Liberal Arts </div>
                    </div>
                </div>
            </div>
						
        </div>
    );
}

export default Education