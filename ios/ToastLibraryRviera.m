#import "ToastLibraryRviera.h"
#import "IOSNativeToast.h"

@interface ToastLibraryRviera()
    @property (nonatomic, retain) IOSNativeToast *toast;
@end

@implementation ToastLibraryRviera

- (instancetype)init {
  self = [super init];
  if (self) {
    self.toast = [[IOSNativeToast alloc] init];
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(sampleMethod:(NSString *)stringArgument numberParameter:(nonnull NSNumber *)numberArgument callback:(RCTResponseSenderBlock)callback)
{
    // TODO: Implement some actually useful functionality
	callback(@[[NSString stringWithFormat: @"numberArgument: %@ stringArgument: %@", numberArgument, stringArgument]]);
}

RCT_EXPORT_METHOD(show:(NSString *)text)
{
  [self.toast showToast:text];
}

@end
