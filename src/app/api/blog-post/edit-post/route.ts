import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
    // console.log('requestttt', request)
    try {
        const extractPostData = await request.json();
        console.log('extracted data', extractPostData)
        const newlyCreatedPost = await prisma.post.update({
            where: {
            id: Number(extractPostData.id),
            },
            data: {
            ...extractPostData,
            id: undefined,
            },
        });
    
        console.log(extractPostData, "extractPostData");
    
        if (newlyCreatedPost) {
          return NextResponse.json({
            success: true,
            message: "New blog post edited successfully",
          });
        } else {
          return NextResponse.json({
            success: false,
            message: "Something went wrong ! Please try again",
          });
        }
      } catch (e) {
        console.log(e);
    
        return NextResponse.json({
          success: false,
          message: "Something went wrong ! Please try again",
        });
      }
}
