/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface AppDelegate ()

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  
  NSArray *imageList = @[@"http://foo.com/bar1.png",
                         @"http://foo.com/bar2.png"];
  NSDictionary *props = @{@"images" : imageList};

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"RNToIOS"
                                               initialProperties:props
                                                   launchOptions:launchOptions];
 
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  //在appProperties设置之后，React Native应用将会根据新的属性重新渲染。当然，只有在新属性和之前的属性有区别时更新才会被触发。
  //你可以随时更新属性，但是更新必须在主线程中进行，读取则可以在任何线程中进行。 更新属性时并不能做到只更新一部分属性。我们建议你自己封装一个函数来构造属性。
//  NSArray *imageList = @[@"http://foo.com/bar3.png",
//                         @"http://foo.com/bar4.png"];
//  rootView.appProperties = @{@"images" : imageList};

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
