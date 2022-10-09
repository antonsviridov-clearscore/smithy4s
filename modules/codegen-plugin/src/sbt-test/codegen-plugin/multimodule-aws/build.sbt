ThisBuild / scalaVersion := "2.13.8"

lazy val foo = (project in file("foo"))
  .enablePlugins(Smithy4sCodegenPlugin)
  .settings(
    libraryDependencies ++= Seq(
      "com.disneystreaming.smithy4s" %% "smithy4s-aws" % smithy4sVersion.value
    )
  )

lazy val bar = (project in file("bar"))
  .enablePlugins(Smithy4sCodegenPlugin)
  .dependsOn(foo)
