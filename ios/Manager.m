//
//  Manager.m
//  RNToIOS
//
//  Created by wangjt on 2017/10/11.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "Manager.h"

@implementation Manager

RCT_EXPORT_MODULE();

//清理缓存
RCT_EXPORT_METHOD(cleanCache:(RCTResponseSenderBlock)callback)
{
  NSURLCache *httpCache = [NSURLCache sharedURLCache];
  [httpCache removeAllCachedResponses];
  NSUInteger cache = [httpCache currentDiskUsage];
  callback(@[[NSNull null],@(cache)]);
}

RCT_EXPORT_METHOD(cacheSize:(RCTResponseSenderBlock)callback)
{
  NSURLCache *httpCache = [NSURLCache sharedURLCache];
  NSUInteger cache = [httpCache currentDiskUsage];
  callback(@[[NSNull null],@(cache)]);
}

//接收传过来的 NSString
RCT_EXPORT_METHOD(addEventOne:(NSString *)name){
   NSLog(@"接收传过来的NSString+NSString:%@",name);
}
// 接收传过来的 NSString + NSDictionary
RCT_EXPORT_METHOD(addEventTwo:(NSString *)name details:(NSDictionary *)details)
{
   RCTLogInfo(@"接收传过来的NSString+NSDictionary: %@ %@", name, details);
}

// 接收传过来的 NSString + date日期
RCT_EXPORT_METHOD(addEventThree:(NSString *)name date:(NSDate *)date)
{
    NSDateFormatter *formatter = [[NSDateFormatter alloc] init] ;
    [formatter setDateFormat:@"yyyy-MM-dd"];
   RCTLogInfo(@"接收传过来的NSString+NSDictionary: %@ %@", name, [formatter stringFromDate:date]);
}

//  对外提供调用方法,演示Callback
RCT_EXPORT_METHOD(testCallbackEventOne:(NSString *)name callback:(RCTResponseSenderBlock)callback)
{
   NSLog(@"%@",name);
   NSArray *events=@[@"1", @"2", @"3",@"4"]; //准备回调回去的数据
   callback(@[[NSNull null],events]);
}






//Promises
//对外提供调用方法,演示Promise使用
RCT_REMAP_METHOD(testCallbackEventTwo,
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
   NSArray *events =@[@"one ",@"two ",@"three"];//准备回调回去的数据
   if (events) {
     resolve(events);
   } else {
     NSError *error=[NSError errorWithDomain:@"我是Promise回调错误信息..." code:101 userInfo:nil];
     reject(@"no_events", @"There were no events", error);
   }
}

- (NSDictionary *)constantsToExport
{
   return @{ @"ValueOne": @"我是从原生定义的~" };
}

@end
